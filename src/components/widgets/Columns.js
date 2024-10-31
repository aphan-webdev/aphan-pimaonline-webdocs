import { useRef, useState } from "react";

export default function Columns() {
	const codeRef = useRef(null);
	const [buttonText, setButtonText] = useState("Copy code");

	const handleCopyCode = () => {
		const codeElement = codeRef.current;
		const range = document.createRange();
		range.selectNode(codeElement);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();

		setButtonText("Copied!");

		setTimeout(() => {
			setButtonText("Copy code");
		}, 2000);
	};

	return (
		<section className="wd-content" id="toc-columns">
			<h2 id="columns" className="section-top anchor">
				Columns
			</h2>
			<p>
				Use <strong>Columns</strong> to format text, images, and other widgets
				in a side-by-side fashion. A maximum of three columns will appear one
				line, and additional columns will automatically wrap to the next line.
				On mobile view, each column will stack.
			</p>
			<p>
				Use <span className="wd-monospace">.columns</span> as the parent
				element, and nest <span className="wd-monospace">.col-1</span>,{" "}
				<span className="wd-monospace">.col-2</span>,{" "}
				<span className="wd-monospace">.col-3</span>, etc. within the parent{" "}
				<span className="wd-monospace">div</span>.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="columns">
						<div className="col-1">
							<h3>About Epistemology</h3>
							<p>
								Epistemology examines the nature and limits of knowledge,
								questioning what it means to "know" and how knowledge differs
								from mere belief. Epistemologists seek to define truth and
								explore how people justify beliefs, bridging the gap between
								opinion and fact.{" "}
							</p>
						</div>
						<div className="col-2">
							<img src="https://unsplash.it/300/300" alt="" />
						</div>
						<div className="col-3">
							<p>
								In cognitive science, researchers study the mechanisms behind
								thought and perception, integrating psychology, neuroscience,
								and computer science. This interdisciplinary work has fueled
								advances in artificial intelligence and deepened our
								understanding of mental processes and human-computer
								interactions.
							</p>
						</div>
					</div>
				</div>
				<div className="wd-btn-container">
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
				</div>
				<div className="wd-html-code">
					<pre>
						<code className="language-html" ref={codeRef}>
							{String.raw`<div className="columns">
 <div className="col-1">
  <h3>About Epistemology</h3>
  <p>Epistemology examines the nature and limits of knowledge, questioning what it means to "know" and how knowledge differs from mere belief. Epistemologists seek to define truth and explore how people justify beliefs, bridging the gap between opinion and fact.</p>
 </div>
 <div className="col-2">
  <img src="https://unsplash.it/300/300" alt="" />
 </div>
 <div className="col-3">
  <p>In cognitive science, researchers study the mechanisms behind thought and perception, integrating psychology, neuroscience, and computer science. This interdisciplinary work has fueled advances in artificial intelligence and deepened our understanding of mental processes and human-computer interactions.</p>
 </div>
</div>`}
						</code>
					</pre>
				</div>
			</div>
		</section>
	);
}
