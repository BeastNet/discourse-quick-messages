import {createWidget} from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

export default createWidget('messages-menu', {
  tagName: 'li.messages-menu',
  panelContents() {
    return [
      this.attach('message-list'),
      h('div.menu-footer', [
        h('hr'),
        h('ul.menu-links.columned', [
          h('li.all-messages', this.attach('link',
            {label: 'show_more',
             action: 'goToMessages'})),
          h('li.new-message', this.attach('link',
            {icon: 'envelope',
             label: 'user.new_private_message',
             action: 'addToDocked'}))
          ]
        )])];
  },

  html() {
    return this.attach('message-box', { contents: () => this.panelContents() });
  },

  clickOutside() {
    this.sendWidgetAction('toggleMessages');
  }
});
