package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.widget.TextView;

public class plan_conNutri extends AppCompatActivity {

    private TextView tvCab1;

    private TextView pp;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_plan_con_nutri);

        tvCab1 = (TextView)findViewById(R.id.TV_c1);
        String dato= "Plan Nutricional";
        tvCab1.setText(dato);

        pp= (TextView)findViewById(R.id.TV_Plan);
        pp.setMovementMethod(new ScrollingMovementMethod());
        pp.setText("Este es el plan dado por tu nutricionista:");



    }
}