package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class principal extends AppCompatActivity {

    private TextView tvCab;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_principal);

        tvCab=(TextView)findViewById(R.id.tV_p);
        String dato= "Bienvenido " + getIntent().getStringExtra("usuario");
        tvCab.setText(dato);
    }

    public void Plan(View view) {
        Intent plan = new Intent(this, plan_conNutri.class);
        startActivity(plan);
    }

    public void adddiario(View view) {
        Intent adddia = new Intent(this, Add_comida.class);
        startActivity(adddia);
    }

    public void addreceta(View view) {
        Intent addrec = new Intent(this, add_receta.class);
        startActivity(addrec);
    }
}