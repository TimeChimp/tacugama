import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '../../utils/test-utils';
import { Avatar } from '.';

test('it shows initials', () => {
  const testName = 'John Deo';
  const intitials = 'JD';

  render(<Avatar name={testName} />);

  expect(screen.getByText(intitials)).toBeInTheDocument();
});

// TODO(https://github.com/TimeChimp/tacugama/issues/564): find a way to wait for image to be loaded
test.skip('it shows no initials when supplying an image src', () => {
  const testName = 'John Deo';
  const intitials = 'JD';
  const avatarLink =
    'https://st.depositphotos.com/3244893/5106/v/950/depositphotos_51060005-stock-illustration-cute-little-panda-icon.jpg';

  render(<Avatar name={testName} src={avatarLink} />);

  expect(screen.queryByText(intitials)).not.toBeInTheDocument();
});
