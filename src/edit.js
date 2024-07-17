/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

/**
 * React components to add controls to the block sidebar editor.
 *
 */
import { PanelBody, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// Removed this file, since the copyright-date-block doesn't need any styling in the editor sidebar.
// import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "copyright-date-block")}>
					<TextControl
						label={__("Starting Year", "copyright-date-block")}
						value={startingYear}
						onChange={(newStartingYear) => {
							// update startingYear with newValue
							setAttributes({ startingYear: newStartingYear });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				{__("Copyright", "copyright-date-block")}
				&copy; {startingYear} - {currentYear}
			</p>
		</>
	);
}
