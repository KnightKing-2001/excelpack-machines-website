export interface TeamMemberCardProps {
  name: string;

  role: string;

  image?: string;

  description?: string;

  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };

  className?: string;
}
