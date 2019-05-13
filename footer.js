import {ShadowElement, html} from '@cfware/shadow-element';

class CFWareFooter extends ShadowElement {
	get template() {
		return html`
			<style>
				:host {
					text-align: center;
					font-size: .75rem;
					box-shadow: 0 0 1px #005d9020;
					border-top: 1px solid #005d9080;
					flex: none;
					-webkit-user-select: none;
				}
			</style>
			<slot />
		`;
	}
}

CFWareFooter.define('cfware-footer');
