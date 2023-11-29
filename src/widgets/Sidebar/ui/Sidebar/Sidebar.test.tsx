import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
  renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sideBar = screen.getByTestId('sidebar')
    expect(sideBar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sideBar).toHaveClass('collapsed')
    screen.debug();
  });
});
