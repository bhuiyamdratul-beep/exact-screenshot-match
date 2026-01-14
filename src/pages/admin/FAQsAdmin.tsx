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

const FAQsAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({ question: '', answer: '', category: '', active: true });

  const { data: items, isLoading } = useQuery({
    queryKey: ['faqs-admin'],
    queryFn: async () => { const { data, error } = await supabase.from('faqs').select('*').order('display_order'); if (error) throw error; return data; },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingItem) { const { error } = await supabase.from('faqs').update(data).eq('id', editingItem.id); if (error) throw error; }
      else { const { error } = await supabase.from('faqs').insert(data); if (error) throw error; }
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['faqs-admin'] }); toast({ title: editingItem ? 'Updated' : 'Created' }); resetForm(); },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from('faqs').delete().eq('id', id); if (error) throw error; },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['faqs-admin'] }); toast({ title: 'Deleted' }); },
  });

  const resetForm = () => { setFormData({ question: '', answer: '', category: '', active: true }); setEditingItem(null); setIsDialogOpen(false); };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><h1 className="text-2xl font-bold text-gray-800">FAQs</h1><Button onClick={() => setIsDialogOpen(true)} className="bg-emerald-600"><Plus className="h-4 w-4 mr-2" />Create New</Button></div>
        <Card className="bg-white"><CardContent className="p-6">
          {isLoading ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : (
            <Table><TableHeader><TableRow><TableHead>Question</TableHead><TableHead>Category</TableHead><TableHead>Active</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
              <TableBody>{items?.map((item: any) => (
                <TableRow key={item.id}><TableCell className="font-medium">{item.question}</TableCell><TableCell>{item.category || '-'}</TableCell><TableCell>{item.active ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingItem(item); setFormData({ question: item.question, answer: item.answer, category: item.category || '', active: item.active }); setIsDialogOpen(true); }}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteMutation.mutate(item.id)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button></TableCell></TableRow>
              ))}</TableBody></Table>
          )}</CardContent></Card>
        <Dialog open={isDialogOpen} onOpenChange={() => resetForm()}><DialogContent><DialogHeader><DialogTitle>{editingItem ? 'Edit' : 'Create'} FAQ</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(formData); }} className="space-y-4">
            <div><Label>Question</Label><Input value={formData.question} onChange={(e) => setFormData({ ...formData, question: e.target.value })} required /></div>
            <div><Label>Answer</Label><Textarea value={formData.answer} onChange={(e) => setFormData({ ...formData, answer: e.target.value })} required rows={4} /></div>
            <div><Label>Category</Label><Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} /></div>
            <div className="flex items-center gap-2"><Switch checked={formData.active} onCheckedChange={(c) => setFormData({ ...formData, active: c })} /><Label>Active</Label></div>
            <div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={resetForm}>Cancel</Button><Button type="submit" className="bg-emerald-600">{editingItem ? 'Update' : 'Create'}</Button></div>
          </form></DialogContent></Dialog>
      </div>
    </AdminLayout>
  );
};
export default FAQsAdmin;
