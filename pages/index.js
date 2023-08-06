import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import privacypolicy from '../styles/utils.module.css';
import Signup from '../components/signup';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
   
      <h2>Tagline</h2>
      <p> Web developer</p>
      <h2>Professional Experience</h2>
      <p>
        Expertise in implementing Data Warehousing applications with primary
        focus on design, build and testing ETL interfaces using Informatica Power
        Center in both UNIX and Windows based platforms. Proficient in dimensional
        modelling concepts - star schema and snowflake schema; establishing fact
        and dimensional tables; physical and logical data modeling using Ralph-Kimball
        and Inmon approaches to data warehousing. I’ve extensive experience in implementing data integration interfaces using traditional ETL strategies (SQL, PL/SQL) to extract data from diverse sources including flat files, XMLs and RDBMS tables and persist data into data warehouse built on Teradata, Oracle databases.
      </p>
        <h2>Project</h2>
      <p> 
          J.D Power and Associates provides clients with the information, analysis, and decision-support tools necessary to reduce risk exposure, improve marketing and remarketing effectiveness, and ultimately to improve profitability.
      </p>
     <h2>Skillset</h2>
      <p> ETL TOOLS: Informatica Power Center 10.x/9.x, Talend Open Studio 5.
          DATABASES: Teradata, Oracle 12c/11g, MS SQL Server 2016/2012, MySQL
          DATABASE UTILITIES: Informatica Scheduler, Control-M
          LANGUAGES: Python, Shell Scripting, SQL, Transact-SQL (T-SQL), PL/SQL
          WEB: HTML, CSS</p>
      <Signup/>
    
        <a href="https://www.linkedin.com/in/rani">LinkedIn</a> 
        <a href="https://twitter.com/rani">Twitter</a>
        <a href="https://github.com/rani">GitHub</a>
  
      <section  className={utilStyles.privacypolicy}>
        Privacy Policy: This resume is for job recruitment purposes only. Unauthorized sharing or use is prohibited.
      </section>
        </section>
    </Layout>
  );
}
