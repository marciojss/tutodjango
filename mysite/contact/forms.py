# -*- coding: utf-8 -*-

from django import forms

class ContactForm(forms.Form):
	name = forms.CharField(label = 'nome')
	email = forms.EmailField(label = 'e-mail')
	description = forms.CharField(label = u'descrição', widget = forms.Textarea)

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file',
        help_text='max. 42 megabytes'
    )