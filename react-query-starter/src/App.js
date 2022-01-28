import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueries from "./components/ParallelQueries.page";
import DynamicParallelQueries from "./components/DynamicParallerQueries.page";
import DependentQueries from "./components/DependentQueries.page";
import PaginatedQueries from "./components/PaginatedQueries.page";
import InfiniteQueries from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/super-heroes">
                                    Traditional Super Heroes
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">
                                    RQ Super Heroes
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-parallel">
                                    RQ Parallel Queries
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-dynamic-parallel">
                                    RQ Dynamic Parallel Queries
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-dependent-queies">
                                    RQ DependentQueries
                                </Link>
                            </li>

                            <li>
                                <Link to="/rq-paginated">
                                    RQ Paginated Queries
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-infinite">
                                    RQ Infinite Queries
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/rq-parallel">
                            <ParallelQueries />
                        </Route>
                        <Route path="/rq-dynamic-parallel">
                            <DynamicParallelQueries />
                        </Route>
                        <Route path="/rq-dependent-queies">
                            <DependentQueries />
                        </Route>

                        <Route path="/super-heroes">
                            <SuperHeroesPage />
                        </Route>
                        <Route path="/rq-super-heroes/:heroId">
                            <RQSuperHeroPage />
                        </Route>
                        <Route path="/rq-super-heroes">
                            <RQSuperHeroesPage />
                        </Route>

                        <Route path="/rq-paginated">
                            <PaginatedQueries />
                        </Route>
                        <Route path="/rq-infinite">
                            <InfiniteQueries />
                        </Route>

                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
