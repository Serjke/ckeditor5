/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import ImageResize from 'ckeditor5/packages/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
	Essentials,
	Bold,
	Italic,
	Heading,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Paragraph,
	Link,
	List,
	SimpleUploadAdapter
];

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'|',
			'imageUpload'
		]
	},
	image: {
		upload: {
			panel: {
				items: [
					'insertImageViaUrl'
				]
			}
		},
		styles: [
			'alignLeft',
			'alignCenter',
			'alignRight'
		],
		resizeOptions: [
			{
				name: 'imageResize:original',
				label: 'Оригинал',
				value: null
			},
			{
				name: 'imageResize:50',
				label: '50%',
				value: '50'
			},
			{
				name: 'imageResize:75',
				label: '75%',
				value: '75'
			}
		],
		toolbar: [
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
			'|',
			'imageResize'
		]
	},
	language: 'ru'
};
