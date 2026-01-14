import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

const ServicesAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', short_desc: '', description: '', icon: '', price: '', active: true });

  const { data: items, isLoading } = useQuery({
    queryKey: ['services-admin'],
    queryFn: async () => {
      const { data, error } = await supabase.from('services').select('*').order('display_order');
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingItem) {
        const { error } = await supabase.from('services').update(data).eq('id', editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('services').insert(data);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services-admin'] });
      toast({ title: editingItem ? 'Service updated' : 'Service created' });
      resetForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services-admin'] });
      toast({ title: 'Service deleted' });
    },
  });

  const resetForm = () => { setFormData({ title: '', short_desc: '', description: '', icon: '', price: '', active: true }); setEditingItem(null); setIsDialogOpen(false); };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Services</h1>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-emerald-600 hover:bg-emerald-700"><Plus className="h-4 w-4 mr-2" />Create New</Button>
        </div>
        <Card className="bg-white"><CardContent className="p-6">
          {isLoading ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : (
            <Table><TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Description</TableHead><TableHead>Active</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
              <TableBody>{items?.map((item: any) => (
                <TableRow key={item.id}><TableCell className="font-medium">{item.title}</TableCell><TableCell>{item.short_desc}</TableCell><TableCell>{item.active ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingItem(item); setFormData({ title: item.title, short_desc: item.short_desc || '', description: item.description || '', icon: item.icon || '', price: item.price?.toString() || '', active: item.active }); setIsDialogOpen(true); }}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteMutation.mutate(item.id)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button></TableCell></TableRow>
              ))}</TableBody></Table>
          )}</CardContent></Card>
        <Dialog open={isDialogOpen} onOpenChange={() => resetForm()}><DialogContent><DialogHeader><DialogTitle>{editingItem ? 'Edit' : 'Create'} Service</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate({ ...formData, price: formData.price ? parseFloat(formData.price) : null }); }} className="space-y-4">
            <div><Label>Title</Label><Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required /></div>
            <div><Label>Short Description</Label><Textarea value={formData.short_desc} onChange={(e) => setFormData({ ...formData, short_desc: e.target.value })} /></div>
            <div><Label>Price</Label><Input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} /></div>
            <div className="flex items-center gap-2"><Switch checked={formData.active} onCheckedChange={(c) => setFormData({ ...formData, active: c })} /><Label>Active</Label></div>
            <div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button><Button type="submit" className="bg-emerald-600">{editingItem ? 'Update' : 'Create'}</Button></div>
          </form></DialogContent></Dialog>
      </div>
    </AdminLayout>
  );
};
export default ServicesAdmin;
