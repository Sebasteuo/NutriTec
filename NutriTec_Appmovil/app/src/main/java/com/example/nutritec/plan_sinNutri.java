package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class plan_sinNutri extends AppCompatActivity {

    private TextView tvCab2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_plan_sin_nutri);

        tvCab2=(TextView)findViewById(R.id.TV_c2);
        String dato= "Bienvenido " + getIntent().getStringExtra("usuario");
        tvCab2.setText(dato);
    }


}