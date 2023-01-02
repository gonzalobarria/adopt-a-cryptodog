import { fonts } from './FontsApp';
import Header from './Header';

const Layout = ({ children }) => (
  <main className={fonts}>
    <div className="gradient-bg-welcome w-full min-h-screen pb-10">
      <Header />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 px-5 md:px-20">
        {children}
      </div>
    </div>
  </main>
);

export default Layout;
