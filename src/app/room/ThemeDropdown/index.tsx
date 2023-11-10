import { getThemes } from 'api/query/theme.query';
import { useState } from 'react';
import { ThemeType } from 'types/ThemeTypes';

type props = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function ThemeDropdown(props: props) {
  const [themes, setThemes] = useState<ThemeType[]>([]);

  const fetchThemesData = async () => {
    try {
      const themesData = await getThemes();
      setThemes(themesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des thèmes', error);
    }
  };

  if (themes.length === 0) {
    fetchThemesData();
  }

  const displayThemeOptions = themes.map((theme: ThemeType) => (
    <option key={theme.id} value={theme.name}>
      {theme.name}
    </option>
  ));

  return (
    <select
      onChange={props.onChange}
      name="themes"
      defaultValue=""
      className="text-black invalid:text-gray-400 py-2 px-3  w-full rounded-md border-2 focus:outline-orange-400 border-grey"
    >
      <option value="" disabled>
        Choisie un theme
      </option>
      {displayThemeOptions}
    </select>
  );
}
