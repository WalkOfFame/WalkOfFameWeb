import { FC } from "react";
import { useAppRoutes } from "components/navigation/routing/useAppRoutes";
import { NavigationSet } from "./NavigationSet";
import { LanguageSelector } from "components/footer/LanguageSelector";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";

export const AppNavigation: FC<{}> = props =>
{
  const { routes = [], activeRoutes = [] } = useAppRoutes();
  const { t } = useTranslation();

  if(!routes || !routes.length) return null;

  return (
   <>
    <Helmet>
      <title>{ activeRoutes.length ? `${t(`navigation.${activeRoutes[0].name}`)} - Famewood` : "Famewood" }</title>
      <meta name="description" content={ t('welcome.jumbotron.text') } />
    </Helmet>
      <div className="md:rounded-b-md p-2 sticky top-0 z-50 bg-violet-500 shadow-md font-medium text-white flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 text-white text-xl">Famewood</div>
        </div>
        <div className="flex items-center justify-center gap-2 overflow-y-auto w-full md:w-auto">
          <NavigationSet route={ routes[0] } activeRoutes={ activeRoutes } />
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}