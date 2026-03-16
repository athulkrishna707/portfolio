export const projects = [
  {
    id: 'ecommerce-eda',
    title: 'E-Commerce Sales EDA',
    description: 'Statistical analysis of 500k+ transactions to identify revenue drivers.',
    longDescription: 'This project involved cleaning and analyzing a large e-commerce dataset. Key focus was on customer behavior and seasonal trends.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    imageUrl: `https://picsum.photos/seed/${Math.random()}/600/400`,
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-eda',
    businessProblem: 'Identify revenue drivers from 500K transactions',
    keyResults: ['15% revenue insight', '3 customer segments identified'],
    dateCompleted: '2024-Q1'
  },
  {
    id: 'stock-prediction',
    title: 'Stock Market Predictor',
    description: 'LSTM neural network for time-series forecasting of tech stocks.',
    longDescription: 'Built a deep learning model to predict closing prices of major tech stocks using historical data.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    imageUrl: `https://picsum.photos/seed/${Math.random()}/600/400`,
    githubUrl: 'https://github.com/yourusername/stock-predictor',
    businessProblem: 'Predict short-term stock movements',
    keyResults: ['85% directional accuracy', 'Low MSE on test set'],
    dateCompleted: '2024-Q2'
  }
];
