import { flow, Instance, types } from "mobx-state-tree";

const url = "https://api.covid19api.com/";

export interface RouteInstance extends Instance<typeof Route> {}

export const Route = types.model({
  Name: types.string,
  Description: types.string,
  Path: types.string,
});

export const CovidInfo = types.model({
  countriesRoute: Route,
  countryDayOneRoute: Route,
  countryDayOneTotalRoute: Route,
  countryRoute: Route,
  countryRoutePremium: Route,
  countryRoutePremiumData: Route,
  countryStatusDayOneLiveRoute: Route,
  countryStatusDayOneRoute: Route,
  countryStatusDayOneTotalRoute: Route,
  countryStatusLiveRoute: Route,
  countryStatusRoute: Route,
  countryStatusTotalRoute: Route,
  countrySummaryRoutePremium: Route,
  countryTestingPremium: Route,
  countryTotalRoute: Route,
  exportRoute: Route,
  liveCountryRoute: Route,
  liveCountryStatusAfterDateRoute: Route,
  liveCountryStatusRoute: Route,
  summaryRoute: Route,
  travelAdvicePremium: Route,
  webhookRoute: Route,
});

const CovidInfoStore = types
  .model({
    covidInfo: types.maybe(CovidInfo),
    selectedTheme: types.safeReference(Route),
  })
  .views((self) => {
    return {
      get routeList(): RouteInstance[] {
        if (!self.covidInfo) return [];

        return Object.values(self.covidInfo);
      },
    };
  })
  .actions((self) => {
    return {
      readCovidInfo: flow(function* readCovidInfo() {
        const covidInfo = yield fetch("https://api.covid19api.com/").then(
          (res) => res.json()
        );

        self.covidInfo = covidInfo;

        return self.covidInfo;
      }),
      readCovidStatsPerCountry: flow(function* readCovidStatsPerCountry(url) {
        const covidInfo = yield fetch(url).then((x) => x.json());
        return covidInfo;
      }),
      readCountries: flow(function* readCountries() {
        const countries = yield fetch(
          "https://api.covid19api.com/countries"
        ).then((x) => x.json());
        return countries;
      }),
    };
  });

export const store = CovidInfoStore.create();
