import { faLanguage, faChevronDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "components/utils";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ['en', 'pt-BR'];

export const LanguageSelector: FC<{}> = props =>
{
  const { i18n, t } = useTranslation();

  const [ selectedLanguage, setSelectedLanguage ] = useState<string>('en');

  useEffect(() =>
  {
    if (i18n && i18n.resolvedLanguage !== selectedLanguage)
      setSelectedLanguage(i18n.resolvedLanguage);
  }, [ i18n ]);

  const selectLanguage = useCallback((code: string) =>
  {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
  }, [ i18n ]);
  
  return (
    <Listbox value={ selectedLanguage } onChange={ selectLanguage }>
      {({ open }) => (
      <div className="h-full">
        <Listbox.Button className={ classNames('relative h-full px-3 py-1 text-sm border-none rounded-md transition-colors flex items-center gap-2', !open && 'bg-violet-500 text-white', open && 'bg-white text-violet-500') }>
          <FontAwesomeIcon icon={ faLanguage } className="text-2xl" />
          <FontAwesomeIcon icon={ faChevronDown } />
        </Listbox.Button>
        <Transition
          show={ open }
          as={ Fragment }
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full md:w-56 z-10 left-0 md:left-auto md:right-0 mt-2 md:mt-5 max-h-60 overflow-auto md:rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {languages.map((language) => (
              <Listbox.Option
                key={ language }
                className={({ active }) =>
                  classNames(
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9'
                  )
                }
                value={ language }
              >
                {({ selected, active }) => (
                  <>
                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                    { t(`language.${language}`) }
                    </span>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-violet-500',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                      >
                        <FontAwesomeIcon icon={ faCheckCircle } />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
      )}
    </Listbox>
  );
}