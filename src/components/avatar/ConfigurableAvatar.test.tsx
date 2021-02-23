import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '../../utils/test-utils';
import { ConfigurableAvatar } from '.';

const TEST_NAME = 'John Deo';
const IMAGE_LINK =
  'https://st.depositphotos.com/3244893/5106/v/950/depositphotos_51060005-stock-illustration-cute-little-panda-icon.jpg';

const DELETE_BUTTON_TEST_ID = 'avatar-delete-button';

const onRemove = jest.fn();
const onUploadClick = jest.fn();

test('it shows a delete button when providing an image', () => {
  render(<ConfigurableAvatar src={IMAGE_LINK} name={TEST_NAME} onRemove={onRemove} onUploadClick={onUploadClick} />);

  expect(screen.getByTestId(DELETE_BUTTON_TEST_ID)).toBeInTheDocument();
});

test('it shows no delete button when not providing an image', () => {
  render(<ConfigurableAvatar name={TEST_NAME} onRemove={onRemove} onUploadClick={onUploadClick} />);

  expect(screen.queryByTestId(DELETE_BUTTON_TEST_ID)).not.toBeInTheDocument();
});
