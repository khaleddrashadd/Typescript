type As = {
  as: string;
  grade: number;
  ver?: boolean;
};

const ob = {
  as: 'A',
  grade: 1,
};

const bb: Readonly<As> = {
  ...ob,
  ver: true,
};

