export interface DomainResponse {
  status: number;
  message: string;
  data: Domain[];
}
export interface Domain {
  domain: string;
  domain_Availability: string;
}
