export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = req.cookies.authToken; 

  if (!token) {
    res.writeHead(302, { Location: '/login' });
    res.end();
    return { props: {} };
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    return {
      props: { posts: [] },
    };
  }

  const posts = await response.json();
  
  return {
    props: { posts },
  };
}
