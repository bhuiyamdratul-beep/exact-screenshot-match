import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';

const UsersAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: users, isLoading } = useQuery({
    queryKey: ['users-admin'],
    queryFn: async () => {
      const { data: profiles, error: pError } = await supabase.from('profiles').select('*');
      if (pError) throw pError;
      const { data: roles, error: rError } = await supabase.from('user_roles').select('*');
      if (rError) throw rError;
      return profiles.map((p: any) => ({ ...p, role: roles.find((r: any) => r.user_id === p.user_id)?.role || 'user' }));
    },
  });

  const updateRoleMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      // Delete existing role then insert new one (since unique is on user_id+role)
      await supabase.from('user_roles').delete().eq('user_id', userId);
      const { error } = await supabase.from('user_roles').insert({ 
        user_id: userId, 
        role: role as 'admin' | 'moderator' | 'user' 
      });
      if (error) throw error;
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['users-admin'] }); toast({ title: 'Role updated' }); },
    onError: (error: Error) => { toast({ title: 'Error', description: error.message, variant: 'destructive' }); },
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <Card className="bg-white"><CardContent className="p-6">
          {isLoading ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : (
            <Table><TableHeader><TableRow><TableHead>Email</TableHead><TableHead>Name</TableHead><TableHead>Role</TableHead><TableHead>Joined</TableHead></TableRow></TableHeader>
              <TableBody>{users?.map((user: any) => (
                <TableRow key={user.id}><TableCell>{user.email}</TableCell><TableCell>{user.full_name || '-'}</TableCell>
                  <TableCell><Select value={user.role} onValueChange={(v) => updateRoleMutation.mutate({ userId: user.user_id, role: v })}>
                    <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="user">User</SelectItem><SelectItem value="moderator">Moderator</SelectItem><SelectItem value="admin">Admin</SelectItem></SelectContent>
                  </Select></TableCell>
                  <TableCell>{format(new Date(user.created_at), 'MMM dd, yyyy')}</TableCell></TableRow>
              ))}</TableBody></Table>
          )}</CardContent></Card>
      </div>
    </AdminLayout>
  );
};
export default UsersAdmin;
