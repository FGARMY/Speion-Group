-- Create the contact submissions table
create table public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  company text,
  budget text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- Allow anonymous inserts (so anyone can submit the contact form)
create policy "Allow anonymous inserts" 
on public.contact_submissions 
for insert 
with check (true);

-- Allow authenticated admins to read the submissions (optional, if you have auth)
create policy "Allow authenticated reads" 
on public.contact_submissions 
for select 
to authenticated 
using (true);
