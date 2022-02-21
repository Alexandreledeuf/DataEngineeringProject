import pandas as pd
from detoxify import Detoxify
import sys


def main():
    text = sys.argv[1]
    results = Detoxify('original').predict(text)
    input_text="resultat"
    df = pd.DataFrame(results, index=[input_text]).round(4)
    df_list = df.iloc[[0]].values.tolist()
    df_column_list = df.columns.tolist()
    liste_resultat = df_list[0]
    for i in range(len(liste_resultat)):
        liste_resultat[i] = round(liste_resultat[i],4)*100
        print(df_column_list[i],":",liste_resultat[i],";")



if __name__ == "__main__":
    main()