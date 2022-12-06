export const users: Users = {
  users: [
    {
      id: 1,
      name: 'Administrator',
      login: 'admin',
    },
    {
      id: 2,
      name: 'Amilton Cristian',
      login: 'amtcr',
    },
    {
      id: 3,
      name: 'Joab Cesar',
      login: 'joarabis',
    },
    {
      id: 4,
      name: 'Livia Almeida',
      login: 'livida',
    },
    {
      id: 5,
      name: 'Aline Dani Alves',
      login: 'rh',
    },
  ]
}

type Users = {
  users:
  {
    id: number,
    name: string,
    login: string,
  }[],
}