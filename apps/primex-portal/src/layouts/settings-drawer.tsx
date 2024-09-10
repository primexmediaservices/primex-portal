'use client';

import { Button } from 'rizzui';
import SimpleBar from '@ui/simplebar';
import EnvatoIcon from '@components/icons/envato';
import ColorOptions from '@/layouts/settings/color-options';
import ThemeSwitcher from '@/layouts/settings/theme-switcher';

export default function SettingsDrawer() {
  return (
    <>
      <SimpleBar className="h-[calc(100%-138px)]">
        <div className="px-5 py-6">
          <ThemeSwitcher />
          <ColorOptions />
        </div>
      </SimpleBar>
    </>
  );
}
