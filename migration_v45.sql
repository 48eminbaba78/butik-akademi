-- ============================================================================
-- MIGRATION V45 — match_requests Tablosu RLS Güncellemesi
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- Koçların kendilerine gelen başvuruları (match_requests) kabul/red durumuna güncelleyebilmesi için RLS kuralı:
DROP POLICY IF EXISTS "Only developers can manage match requests" ON public.match_requests;
DROP POLICY IF EXISTS "Matched coaches can update their match requests" ON public.match_requests;

CREATE POLICY "Matched coaches can update their match requests" ON public.match_requests
    FOR UPDATE USING (
        matched_coach_id = auth.uid()
        OR public.get_user_role(auth.uid()) = 'developer'
    );

CREATE POLICY "Only developers can delete match requests" ON public.match_requests
    FOR DELETE USING (
        public.get_user_role(auth.uid()) = 'developer'
    );
