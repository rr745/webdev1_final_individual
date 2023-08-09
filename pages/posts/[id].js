import Head from 'next/head';
import Layout from '../../components/layout';
// import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  // const postData = await getPostData(params.id);

  return {
    // props: {
    //   postData,
    // },
  };
}
export async function getStaticPaths() {
  return {
    paths: [], // Since you don't have any specific paths to pre-render
    fallback: false // This will show a 404 for any paths not generated at build time
  };
}
export default function Post({ postData }) {
  return {};
}
