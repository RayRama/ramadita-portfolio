export type Certification = {
  id: string;
  issuer: string;
  issueDate: string;
  expiresDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
};
