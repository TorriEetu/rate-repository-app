import { render, within } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/repository/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      // Add your test code here
      const screen = render(<RepositoryListContainer repositories={repositories} />);
      const items = screen.getAllByTestId('repositoryItem');
      expect(items.length).toBe(2);
      const [first, second] = items;

      //TODO figure out how to test if image exist
      expect(within(first).getByText('jaredpalmer/formik')).toBeDefined();
      expect(within(first).getByText('Build forms in React, without the tears')).toBeDefined();
      expect(within(first).getByText('TypeScript')).toBeDefined();
      expect(within(first).getByText('1.6k')).toBeDefined();
      expect(within(first).getByText('21.9k')).toBeDefined();
      expect(within(first).getByText('88')).toBeDefined();
      expect(within(first).getByText('3')).toBeDefined();

      expect(within(second).getByText('async-library/react-async')).toBeDefined();
      expect(within(second).getByText('Flexible promise-based React data loader')).toBeDefined();
      expect(within(second).getByText('JavaScript')).toBeDefined();
      expect(within(second).getByText('0.1k')).toBeDefined();
      expect(within(second).getByText('1.8k')).toBeDefined();
      expect(within(second).getByText('72')).toBeDefined();
      expect(within(second).getByText('3')).toBeDefined();
    });
  });
});
