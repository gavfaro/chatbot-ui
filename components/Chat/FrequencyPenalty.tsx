import { FC, useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { DEFAULT_FREQUENCY_PENALTY } from '@/utils/app/const';

import HomeContext from '@/pages/api/home/home.context';

interface Props {
  label: string;
  onChangeFrequencyPenalty: (frequencyPenalty: number) => void;
}

export const FrequencyPenaltySlider: FC<Props> = ({
  label,
  onChangeFrequencyPenalty,
}) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];
  const [frequencyPenalty, setFrequencyPenalty] = useState(
    lastConversation?.frequency_penalty ?? DEFAULT_FREQUENCY_PENALTY,
  );
  const { t } = useTranslation('chat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setFrequencyPenalty(newValue);
    onChangeFrequencyPenalty(newValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {label}
      </label>
      <span className="text-[12px] text-black/50 dark:text-white/50 text-sm">
        {t(
         `Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.`,
        )}
      </span>
      <span className="mt-2 mb-1 text-center text-neutral-900 dark:text-neutral-100">
        {frequencyPenalty.toFixed(1)}
      </span>
      <input
        className="cursor-pointer"
        type="range"
        min={-2}
        max={2}
        step={0.1}
        value={frequencyPenalty}
        onChange={handleChange}
      />
      
    </div>
  );
};
