export interface Certification{
  logo: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Experience{
  role: string;
  company: string;
  start: string;
  end: string;
  description :string;
}

export interface Skill{
  name: string;
  level: number;
}
export interface Contact{
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface AboutMe{
  name: string;
  title: string;
  bio: string;
  skill: Skill[]
  contact: Contact
}