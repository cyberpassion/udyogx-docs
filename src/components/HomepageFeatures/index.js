import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Getting Started",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: <>Quickly set up your documentation site with UdyogX. Start with simple commands and get your first page live in minutes.</>,
	},
	{
		title: "Modules",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: <>Organize your content with powerful module structures. Write clean documentation and manage large doc sets effortlessly.</>,
	},
	{
		title: "Plugins",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: <>Extend functionality using plugins for search, analytics, versioning, and more. Customize your site without limits.</>,
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
