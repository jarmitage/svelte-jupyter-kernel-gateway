import pandas as pd
import numpy as np
import json
import math

class SvelteExample:

	def __init__(self):
		self.df = pd.DataFrame(np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), columns=['a', 'b', 'c'])

	def getDfJson(self):
		return self.df.to_json(orient='records')
