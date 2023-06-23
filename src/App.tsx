import React from "react";
import "./App.css";
import {
	Alert,
	Badge,
	BottomNav,
	BottomNavItem,
	Breadcrumb,
	Button,
	CookieBar,
	StepperContainer,
	StepperHeader,
	StepperHeaderElement,
} from "design-react-kit";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

const App = () => {
	return (
		<main>
			<Alert>This is an Alert</Alert>

			<StepperContainer>
				<StepperHeader>
					<StepperHeaderElement variant="confirmed">
						Nome 1
					</StepperHeaderElement>

					<StepperHeaderElement>Nome 1</StepperHeaderElement>
				</StepperHeader>
			</StepperContainer>

			<Badge color="primary">Primary</Badge>
			<Badge color="secondary">Secondary</Badge>
			<Badge color="success">Success</Badge>
			<Badge color="danger">Danger</Badge>
			<Badge color="warning">Warning</Badge>
			<Badge color="info">Info</Badge>
			<Badge color="light">Light</Badge>
			<Badge color="dark">Dark</Badge>

			<Button color="primary">Primary</Button>
			<Button color="secondary">Secondary</Button>
			<Button color="success">Success</Button>
			<Button color="danger">Danger</Button>
			<Button color="warning">Warning</Button>
			<Button color="info">Info</Button>
			<Button color="light">Light</Button>
			<Button color="dark">Dark</Button>

			<div className="">
				<CookieBar>
					<p>
						Utilizziamo i cookie per essere sicuri che tu possa avere la
						migliore esperienza sul nostro sito. Se continui ad utilizzare
						questo sito consideriamo che tu ne sia felice.
					</p>
					<Button color="primary">Accetta</Button>
				</CookieBar>
			</div>
			<BottomNav>
				<BottomNavItem label="Home" active />
				<BottomNavItem label="Profile" />
				<BottomNavItem label="Messages" />
			</BottomNav>
		</main>
	);
};

export default App;
