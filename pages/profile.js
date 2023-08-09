// components/NavBar.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/layout.module.css'; // Create a corresponding CSS module


export default function ProfileHead() {
    return (
        <nav className={styles.profilebar}>
            <div className={styles.brand}>
                Radhika
                <div className={styles.webDeveloper}>
                    Web Developer
                </div>

                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/rayala-radhika-9932a721/" className={styles.linkedin}>LinkedIn</a>
                    <a href="https://github.com/rr745" className={styles.github}>GitHub</a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    priority
                    src="/images/radhika.jpg"
                    className={styles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                />

            </div>
        </nav>
    );
}

export function ProfileBody() {
    return (
        <><nav className={styles.profilebar}>
            <div>
                <div className={styles.profileHeadings}>
                    Summary
                </div>
                <div className={styles.profileText}>
                    With extensive expertise in Data Warehousing, I possess a profound understanding of ETL interfaces, particularly with the use of Informatica Power Center across both UNIX and Windows platforms. My knowledge is rooted in the best practices of both Ralph Kimball and Inmon methodologies, and I'm well-versed in designing with star and snowflake schemas.
                    <br /><br />
                    In addition to my data warehousing capabilities, I have honed my skills in web development technologies such as React, JavaScript, HTML, CSS, and Next.js. My passion for creating interactive and efficient web applications drives me to constantly update my skill set. I am eager to leverage these skills to craft impactful web solutions and contribute to innovative web development opportunities.
                </div>
            </div>
        </nav><nav className={styles.profilebar}>
                <div>
                    <div className={styles.profileHeadings}>
                        Education
                    </div>
                    <div className={styles.profileText}>
                        JNTU, Bachelors in Electronics Engineering
                    </div>
                </div>
            </nav>
            <nav className={styles.profilebar}>
                <div>
                    <div className={styles.profileHeadings}>
                        Tech Stack
                    </div>
                    <div className={styles.profileText}>
                        <div>Data Integration Tools: Informatica Power Center 9.x/10.x, Talend Open Studio 5</div>
                        <div>Databases: Teradata, Oracle, MS SQL Server 2016/2012, MySQL</div>
                        <div>Utilities: SQL Loader, TOAD, SQL</div>
                        <div>Languages: HTML, CSS, JavaScript, Python, Shell</div>

                    </div>
                </div>
            </nav>
            <nav className={styles.profilebar}>
                <div>
                    <div className={styles.profileHeadings}>
                        Experience
                    </div>
                    <br />
                    <div className={styles.profileSecondHeadings}>
                        Web Developer
                    </div>
                    <div className={styles.profileText}>
                        As an aspiring web developer, I have dedicated significant time and effort to mastering front-end technologies. My foundation in HTML, CSS, and JavaScript has equipped me to craft visually appealing and functional web interfaces. Beyond just the technical aspects, I possess a genuine passion for web development, particularly in creating interactive web experiences that engage and captivate users. My continuous pursuit for learning and my enthusiasm for innovative web solutions drives me to stay updated with the latest trends and techniques in the ever-evolving world of web development.
                    </div>
                </div>
            </nav>

            <nav className={styles.profilebar}>
                <div>
                    <div className={styles.profileSecondHeadings}>
                        Data Integration Consultant
                    </div>
                    <div className={styles.profileThirdHeadings}>
                        JD Power and Associates | 2017 - 2021
                    </div>
                    <div className={styles.profileText}>
                        <ul>
                            <li>Collaborated with business teams to comprehend, analyze, and document their requirements.</li>
                            <li>Created Technical Design Documents (TDDs) for introducing new facts and dimensions.</li>
                            <li>Updated existing TDDs to accommodate enhancements and new requirements.</li>
                            <li>Engaged with a diverse range of data sources, including Oracle, SQL Server, and both fixed width and delimited flat files.</li>
                            <li>Designed and updated Informatica mappings to populate staging, dimension, and fact tables.</li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>

    );
}
