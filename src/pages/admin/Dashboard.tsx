import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, TrendingUp, FileText, Briefcase, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const wasLiveRef = useRef(false);
  const hasInitializedRef = useRef(false);

  const triggerUpdateAnimation = useCallback(() => {
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 1500);
  }, []);

  // Set up realtime subscriptions for dashboard stats
  useEffect(() => {
    const channel = supabase
      .channel('dashboard-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => {
        queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
        queryClient.invalidateQueries({ queryKey: ['recent-leads'] });
        triggerUpdateAnimation();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, () => {
        queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
        triggerUpdateAnimation();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio' }, () => {
        queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
        triggerUpdateAnimation();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, () => {
        queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
        triggerUpdateAnimation();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_messages' }, () => {
        queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
        triggerUpdateAnimation();
      })
      .subscribe((status) => {
        const nowLive = status === 'SUBSCRIBED';
        setIsLive(nowLive);

        // Show toast on connection status changes (after initial connection)
        if (hasInitializedRef.current) {
          if (nowLive && !wasLiveRef.current) {
            toast({
              title: "Reconnected",
              description: "Real-time updates are back online",
            });
          } else if (!nowLive && wasLiveRef.current) {
            toast({
              title: "Connection lost",
              description: "Attempting to reconnect...",
              variant: "destructive",
            });
          }
        } else if (nowLive) {
          hasInitializedRef.current = true;
        }

        wasLiveRef.current = nowLive;
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient, triggerUpdateAnimation, toast]);
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [leadsRes, newLeadsRes, blogRes, portfolioRes, testimonialsRes, unreadMessagesRes] = await Promise.all([
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
        supabase.from('portfolio').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      ]);

      return {
        totalLeads: leadsRes.count || 0,
        newLeads: newLeadsRes.count || 0,
        blogPosts: blogRes.count || 0,
        portfolio: portfolioRes.count || 0,
        testimonials: testimonialsRes.count || 0,
        unreadMessages: unreadMessagesRes.count || 0,
      };
    },
  });

  // Fetch recent leads
  const { data: recentLeads } = useQuery({
    queryKey: ['recent-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data as Lead[];
    },
  });

  const statCards = [
    { 
      label: 'Total Leads', 
      value: stats?.totalLeads || 0, 
      icon: Mail, 
      color: 'bg-blue-50 text-blue-600',
      href: '/admin/leads'
    },
    { 
      label: 'New Leads', 
      value: stats?.newLeads || 0, 
      icon: TrendingUp, 
      color: 'bg-emerald-50 text-emerald-600',
      href: '/admin/leads'
    },
    { 
      label: 'Unread Messages', 
      value: stats?.unreadMessages || 0, 
      icon: MessageSquare, 
      color: 'bg-amber-50 text-amber-600',
      href: '/admin/messages'
    },
    { 
      label: 'Blog Posts', 
      value: stats?.blogPosts || 0, 
      icon: FileText, 
      color: 'bg-orange-50 text-orange-600',
      href: '/admin/blog'
    },
    { 
      label: 'Portfolio', 
      value: stats?.portfolio || 0, 
      icon: Briefcase, 
      color: 'bg-purple-50 text-purple-600',
      href: '/admin/portfolio'
    },
    { 
      label: 'Testimonials', 
      value: stats?.testimonials || 0, 
      icon: MessageSquare, 
      color: 'bg-pink-50 text-pink-600',
      href: '/admin/testimonials'
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome to the Dream It Developer admin panel</p>
          </div>
          <div className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
            isLive 
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
              : "bg-gray-100 text-gray-500 border border-gray-200"
          )}>
            <span className={cn(
              "w-2 h-2 rounded-full",
              isLive ? "bg-emerald-500 animate-pulse" : "bg-gray-400"
            )} />
            {isLive ? "Live" : "Connecting..."}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statCards.map((stat) => (
            <Link key={stat.label} to={stat.href}>
              <Card 
                className={cn(
                  "bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer",
                  isUpdating && "animate-pulse ring-2 ring-emerald-400 ring-opacity-50"
                )}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-3 rounded-xl transition-transform duration-300",
                      stat.color,
                      isUpdating && "scale-110"
                    )}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className={cn(
                        "text-2xl font-bold text-gray-800 transition-colors duration-300",
                        isUpdating && "text-emerald-600"
                      )}>{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Leads */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Recent Leads</h2>
              <Link 
                to="/admin/leads" 
                className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                View all →
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentLeads && recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <div 
                    key={lead.id} 
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{lead.name}</p>
                      <p className="text-sm text-gray-500">{lead.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        lead.status === 'new' 
                          ? 'bg-emerald-50 text-emerald-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {lead.status}
                      </span>
                      <span className="text-sm text-gray-400">
                        {format(new Date(lead.created_at), 'MM/dd/yyyy')}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No leads yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
