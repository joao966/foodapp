export const configFormVenda = [
  {
    title: 'Venda',
    name: 'venda',
    sx: {
      gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
    },
    component: [
      {
        type: 'string',
        name: 'valor',
        label: 'Valor',
        disabled: false,
        required: false,
        sx: {
          size: 'small',
        },
      },
    ],
  },
];
