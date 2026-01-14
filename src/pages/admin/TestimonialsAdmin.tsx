import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

const TestimonialsAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', company: '', position: '', content: '', rating: '5' });

  const { data: items, isLoading } = useQuery({
    queryKey: ['testimonials-admin'],
    queryFn: async () => { const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false }); if (error) throw error; return data; },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingItem) { const { error } = await supabase.from('testimonials').update(data).eq('id', editingItem.id); if (error) throw error; }
      else { const { error } = await supabase.from('testimonials').insert(data); if (error) throw error; }
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['testimonials-admin'] }); toast({ title: editingItem ? 'Updated' : 'Created' }); resetForm(); },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from('testimonials').delete().eq('id', id); if (error) throw error; },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['testimonials-admin'] }); toast({ title: 'Deleted' }); },
  });

  const resetForm = () => { setFormData({ name: '', company: '', position: '', content: '', rating: '5' }); setEditingItem(null); setIsDialogOpen(false); };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><h1 className="text-2xl font-bold text-gray-800">Testimonials</h1><Button onClick={() => setIsDialogOpen(true)} className="bg-emerald-600"><Plus className="h-4 w-4 mr-2" />Create New</Button></div>
        <Card className="bg-white"><CardContent className="p-6">
          {isLoading ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : (
            <Table><TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Company</TableHead><TableHead>Rating</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
              <TableBody>{items?.map((item: any) => (
                <TableRow key={item.id}><TableCell className="font-medium">{item.name}</TableCell><TableCell>{item.company}</TableCell><TableCell>{'⭐'.repeat(item.rating)}</TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingItem(item); setFormData({ name: item.name, company: item.company || '', position: item.position || '', content: item.content, rating: item.rating?.toString() || '5' }); setIsDialogOpen(true); }}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteMutation.mutate(item.id)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button></TableCell></TableRow>
              ))}</TableBody></Table>
          )}</CardContent></Card>
        <Dialog open={isDialogOpen} onOpenChange={() => resetForm()}><DialogContent><DialogHeader><DialogTitle>{editingItem ? 'Edit' : 'Create'} Testimonial</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate({ ...formData, rating: parseInt(formData.rating) }); }} className="space-y-4">
            <div><Label>Name</Label><Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
            <div><Label>Company</Label><Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></div>
            <div><Label>Position</Label><Input value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} /></div>
            <div><Label>Content</Label><Textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required /></div>
            <div><Label>Rating (1-5)</Label><Input type="number" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} /></div>
            <div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button><Button type="submit" className="bg-emerald-600">{editingItem ? 'Update' : 'Create'}</Button></div>
          </form></DialogContent></Dialog>
      </div>
    </AdminLayout>
  );
};
export default TestimonialsAdmin;
