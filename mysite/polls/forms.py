class contactForm(forms.Form):
	subject=forms.CharField(max_length=100)
	message=forms.CharField()
	sender=forms.EmailField()
	cc_myself=forms.BooleanField

