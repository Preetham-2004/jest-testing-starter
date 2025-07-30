import { fetchData } from '../src/utils/fetchData.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: 'Preetham' })
  })
);

describe('fetchData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches and returns data', async () => {
    const data = await fetchData('https://api.example.com/user');
    expect(data).toEqual({ name: 'Preetham' });
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/user');
  });

  test('throws error on bad response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ ok: false })
    );

    await expect(fetchData('https://bad-url.com')).rejects.toThrow('Network error');
  });
});
