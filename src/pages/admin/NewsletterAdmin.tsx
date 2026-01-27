import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2, Search, Mail, Download } from 'lucide-react';
import { format } from 'date-fns';

interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}

const NewsletterAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [search, setSearch] = useState('');

  const { data: subscribers, isLoading } = useQuery({
    queryKey: ['newsletter-subscribers', search],
    queryFn: async () => {
      let query = supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (search) {
        query = query.ilike('email', `%${search}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as NewsletterSubscriber[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter-subscribers'] });
      toast({ title: 'Subscriber removed' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const exportToCSV = () => {
    if (!subscribers || subscribers.length === 0) {
      toast({ title: 'No data to export', variant: 'destructive' });
      return;
    }

    const headers = ['Email', 'Subscribed Date'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map(sub => 
        `"${sub.email}","${format(new Date(sub.created_at), 'yyyy-MM-dd HH:mm:ss')}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `newsletter-subscribers-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
    
    toast({ title: 'CSV exported successfully' });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Newsletter Subscribers</h1>
            <p className="text-gray-600">Manage your newsletter email list</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-medium">
              {subscribers?.length || 0} Subscribers
            </div>
          </div>
        </div>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                onClick={exportToCSV}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              </div>
            ) : subscribers?.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No subscribers found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Subscribed Date</TableHead>
                      <TableHead className="w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers?.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">
                          <a 
                            href={`mailto:${subscriber.email}`} 
                            className="text-emerald-600 hover:underline"
                          >
                            {subscriber.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          {format(new Date(subscriber.created_at), 'MMM dd, yyyy - hh:mm a')}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteMutation.mutate(subscriber.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default NewsletterAdmin;
