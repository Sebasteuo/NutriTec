package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.view.View;
import android.widget.Toast;

public class Add_comida extends AppCompatActivity {

    private Spinner Sdes;
    private Spinner Smeri;
    private Spinner Salmuer;
    private Spinner Scafe;
    private Spinner Scena;

    private TextView TV_des;
    private TextView TV_meri;
    private TextView TV_alm;
    private TextView TV_cafe;
    private TextView TV_cena;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_comida);

        TV_des= (TextView)findViewById(R.id.tx_des);
        TV_des.setMovementMethod(new ScrollingMovementMethod());
        TV_meri= (TextView)findViewById(R.id.tx_meri);
        TV_meri.setMovementMethod(new ScrollingMovementMethod());
        TV_alm= (TextView)findViewById(R.id.tx_almue);
        TV_alm.setMovementMethod(new ScrollingMovementMethod());
        TV_cafe= (TextView)findViewById(R.id.tx_cafe);
        TV_cafe.setMovementMethod(new ScrollingMovementMethod());
        TV_cena= (TextView)findViewById(R.id.tx_cena);
        TV_cena.setMovementMethod(new ScrollingMovementMethod());

        Sdes= (Spinner)findViewById(R.id.spinnerdes);
        Smeri= (Spinner)findViewById(R.id.spinnermeri);
        Salmuer= (Spinner)findViewById(R.id.spinneralmuer);
        Scafe= (Spinner)findViewById(R.id.spinnercafe);
        Scena= (Spinner)findViewById(R.id.spinnercena);

        String [] desayunos={"Pan","cereal","yogurt","Cafe","Leche","jugo Naranja"};
        String [] merienda={"batido","papaya","melon","manzana","kiwi"};
        String [] alm_cena={"Arroz","Frijoles","Macarrones","Pure","Picadillo","Sopa", "bistek", "pollo","refresco"};
        String [] cafe={"Cafe","Te","Galleta","Pan","Tamal"};

        ArrayAdapter<String> adapter_des = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, desayunos);
        Sdes.setAdapter(adapter_des);
        ArrayAdapter<String> adapter_meri = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, merienda);
        Smeri.setAdapter(adapter_meri);
        ArrayAdapter<String> adapter_alm = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, alm_cena);
        Salmuer.setAdapter(adapter_alm);
        ArrayAdapter<String> adapter_cafe = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, cafe);
        Scafe.setAdapter(adapter_cafe);
        ArrayAdapter<String> adapter_cena = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, alm_cena);
        Scena.setAdapter(adapter_cena);
    }

    public void add_des(View view) {
        String sele = Sdes.getSelectedItem().toString();
        String dato = TV_des.getText().toString();
        TV_des.setText(dato + "\n" + sele);
    }

    public void add_mer(View view) {
        String sele = Smeri.getSelectedItem().toString();
        String dato = TV_meri.getText().toString();
        TV_meri.setText(dato + "\n" + sele);
    }

    public void add_alm(View view) {
        String sele = Salmuer.getSelectedItem().toString();
        String dato = TV_alm.getText().toString();
        TV_alm.setText(dato + "\n" + sele);
    }

    public void add_cafe(View view) {
        String sele = Scafe.getSelectedItem().toString();
        String dato = TV_cafe.getText().toString();
        TV_cafe.setText(dato + "\n" + sele);
    }

    public void add_cen(View view) {
        String sele = Scena.getSelectedItem().toString();
        String dato = TV_cena.getText().toString();
        TV_cena.setText(dato + "\n" + sele);
    }

    public void agrgar_diario(View view) {
        Intent agrega = new Intent(this, principal.class);
        Toast.makeText(this,"Diario agregado",Toast.LENGTH_SHORT).show();
        this.finish();
        startActivity(agrega);

    }

}