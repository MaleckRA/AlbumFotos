import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hsaleixkopbetwdcpsmk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYWxlaXhrb3BiZXR3ZGNwc21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMTAzOTUsImV4cCI6MjA4ODU4NjM5NX0.rVhYAREFX_D1jLap-14KFa8EGRgqCWxi7-yCKTa8g_I'
)

export const CLOUDINARY_CLOUD = 'dwumbv4lp'
export const CLOUDINARY_PRESET = 'album-mascotas'