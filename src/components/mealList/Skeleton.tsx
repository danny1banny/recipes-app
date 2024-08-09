import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
  speed={3}
  width={240}
  height={270}
  viewBox="0 0 240 270"
  backgroundColor="#f1efef"
  foregroundColor="#bababa"
>
  <rect x="9" y="2" rx="10" ry="10" width="221" height="181" /> 
  <rect x="29" y="194" rx="10" ry="10" width="181" height="33" />
  </ContentLoader>
);
export default Skeleton;
