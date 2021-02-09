export interface Subscriber {
  userId: number;
  firstname?: string;
  lastname?: string;
  role?: string;
  agentId?: number;
}

export const AgentByDefault = {
  userId: 9999,
  firstname: 'default',
  lastname: 'default',
  role: 'agent'
};

export enum Role {
  subscriber = 'subscriber',
  agent = 'agent'
}