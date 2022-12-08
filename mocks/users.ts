export const users: Users = {
  header: ['Código', 'Nome', 'Login'],
  data: [
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
    {
      id: 6,
      name: 'WWW Welber Com',
      login: 'welbinho',
    },
  ],
}

type Users = {
  header: string[]
  data: {
    id: number
    name: string
    login: string
  }[]
}
