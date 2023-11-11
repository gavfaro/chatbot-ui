import { FC, useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { DEFAULT_PRESENCE_PENALTY } from '@/utils/app/const';

import HomeContext from '@/pages/api/home/home.context';

interface Props {
  label: string;
  onChangePresencePenalty: (presencePenalty: number) => void;
}

export const PresencePenaltySlider: FC<Props> = ({
  label,
  onChangePresencePenalty,
}) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];
  const [presencePenalty, setPresencePenalty] = useState(
    lastConversation?.presence_penalty ?? DEFAULT_PRESENCE_PENALTY,
  );
  const { t } = useTranslation('chat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setPresencePenalty(newValue);
    onChangePresencePenalty(newValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {label}
      </label>
      <span className="text-[12px] text-black/50 dark:text-white/50 text-sm">
        {t(
          `Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.`,
        )}
      </span>
      <span className="mt-2 mb-1 text-center text-neutral-900 dark:text-neutral-100">
        {presencePenalty.toFixed(1)}
      </span>
      <input
        className="cursor-pointer"
        type="range"
        min={-2}
        max={2}
        step={0.1}
        value={presencePenalty}
        onChange={handleChange}
      />
     
    </div>
  );
};
