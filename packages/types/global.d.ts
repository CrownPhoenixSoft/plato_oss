type ExtendedParams<T> = Record<string, string> & T;

declare type PageProps<T = {}, B = {}> = {
    params: ExtendedParams<T>;
    searchParams: ExtendedParams<B>;
};

declare type LayoutProps<T = {}> = {
    children: React.ReactNode;
    params: ExtendedParams<T>;
};