import { BookInfo } from "./components/book.info";
import { CurrentUserLoader } from "./components/current-user-loader";
import { DataSource } from "./components/data-source";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";

const getDataFromServer = async (url) => {
  const response = await fetch(url);
  return response.json();
};

function App() {
  return (
    <>
      {/* Loader component for current user data */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* Loader component for user data with userId prop */}
      {/* <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader> */}
      {/* Loader component for book data from a resource URL  */}
      {/* <ResourceLoader resourceUrl="/books/2" resourceName="book">
        <BookInfo />
      </ResourceLoader> */}
      {/* Data source component with custom getData function */}
      {/* <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource> */}
      {/* Container Component with render props pattern */}
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
    </>
  );
}

export default App;
